/**
 * 
 */
package org.zanata.webtrans.shared.validation;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.zanata.webtrans.client.resources.ValidationMessages;
import org.zanata.webtrans.shared.model.ValidationAction;
import org.zanata.webtrans.shared.model.ValidationId;
import org.zanata.webtrans.shared.model.ValidationObject;
import org.zanata.webtrans.shared.validation.action.HtmlXmlTagValidation;
import org.zanata.webtrans.shared.validation.action.JavaVariablesValidation;
import org.zanata.webtrans.shared.validation.action.NewlineLeadTrailValidation;
import org.zanata.webtrans.shared.validation.action.PrintfVariablesValidation;
import org.zanata.webtrans.shared.validation.action.PrintfXSIExtensionValidation;
import org.zanata.webtrans.shared.validation.action.TabValidation;
import org.zanata.webtrans.shared.validation.action.XmlEntityValidation;


/**
 * 
 * @author Alex Eng <a href="mailto:aeng@redhat.com">aeng@redhat.com</a>
 * 
 */
public final class ValidationFactory
{

   public static Comparator<ValidationId> ValidationIdComparator = new Comparator<ValidationId>()
   {
      @Override
      public int compare(ValidationId o1, ValidationId o2)
      {
         return o1.getDisplayName().compareTo(o2.getDisplayName());
      }
   };

   /**
    * Generate sorted list of all Validation Actions with enabled = false
    * 
    * Used in client side (ValidationAction)
    * 
    * @param messages
    * @return Map<ValidationId, ValidationAction>
    */
   public static Map<ValidationId, ValidationAction> getAllValidationActions(ValidationMessages messages)
   {
      TreeMap<ValidationId, ValidationAction> validationList = new TreeMap<ValidationId, ValidationAction>(ValidationIdComparator);

      validationList.put(ValidationId.HTML_XML, new HtmlXmlTagValidation(ValidationId.HTML_XML, messages));
      validationList.put(ValidationId.NEW_LINE, new NewlineLeadTrailValidation(ValidationId.NEW_LINE, messages));
      validationList.put(ValidationId.TAB, new TabValidation(ValidationId.TAB, messages));
      
      validationList.put(ValidationId.JAVA_VARIABLES, new JavaVariablesValidation(ValidationId.JAVA_VARIABLES, messages));
      validationList.put(ValidationId.XML_ENTITY, new XmlEntityValidation(ValidationId.XML_ENTITY, messages));
      
      PrintfVariablesValidation printfVariablesValidation = new PrintfVariablesValidation(ValidationId.PRINTF_VARIABLES, messages);
      PrintfXSIExtensionValidation positionalPrintfValidation = new PrintfXSIExtensionValidation(ValidationId.PRINTF_XSI_EXTENSION, messages);
      
      printfVariablesValidation.mutuallyExclusive(positionalPrintfValidation);
      positionalPrintfValidation.mutuallyExclusive(printfVariablesValidation);
      
      validationList.put(ValidationId.PRINTF_VARIABLES, printfVariablesValidation);
      validationList.put(ValidationId.PRINTF_XSI_EXTENSION, positionalPrintfValidation);

      return validationList;
   }
   
   /**
    * Generate sorted list of all Validation Actions with enabled = false and
    * ValidationMessages = null
    * 
    * Used on server side (ValidationObject)
    * 
    * @return List<ValidationObject>
    */
   public static List<ValidationObject> getAllValidationObject()
   {
      ArrayList<ValidationObject> validationList = new ArrayList<ValidationObject>(getAllValidationActions(null).values());

      return validationList;
   }
}