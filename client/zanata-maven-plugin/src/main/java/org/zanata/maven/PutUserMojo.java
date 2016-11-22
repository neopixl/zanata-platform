package org.zanata.maven;

import org.zanata.client.commands.PutUserCommand;
import org.zanata.client.commands.PutUserOptions;

/**
 * Creates or updates a Zanata user.
 *
 * @goal put-user
 * @requiresOnline true
 * @author Sean Flanigan <sflaniga@redhat.com>
 */
public class PutUserMojo extends ConfigurableMojo<PutUserOptions> implements
        PutUserOptions {

    /**
     * Full name of the user
     *
     * @parameter expression="${zanata.userName}"
     * @required
     */
    private String userName;

    /**
     * Email address of the user
     *
     * @parameter expression="${zanata.userEmail}"
     * @required
     */
    private String userEmail;

    /**
     * Login/username of the user
     *
     * @parameter expression="${zanata.userUsername}"
     * @required
     */
    private String userUsername;

    /**
     * User password hash
     *
     * @parameter expression="${zanata.userPasswordHash}"
     * @required
     */
    private String userPasswordHash;

    /**
     * User's api key (empty for none)
     *
     * @parameter expression="${zanata.userKey}"
     * @required
     */
    private String userKey;

    /**
     * Security roles for the user
     *
     * @parameter expression="${zanata.userRoles}"
     * @required
     */
    private String userRoles;

    /**
     * Language teams for the user
     *
     * @parameter expression="${zanata.userLangs}"
     * @required
     */
    private String userLangs;

    /**
     * Whether the account should be disabled
     *
     * @parameter expression="${zanata.userDisabled}"
     * @required
     */
    private boolean userDisabled;

    public PutUserMojo() throws Exception {
        super();
    }

    public PutUserCommand initCommand() {
        return new PutUserCommand(this);
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserUsername() {
        return userUsername;
    }

    public void setUserUsername(String userUsername) {
        this.userUsername = userUsername;
    }

    public String getUserPasswordHash() {
        return userPasswordHash;
    }

    public void setUserPasswordHash(String userPasswordHash) {
        this.userPasswordHash = userPasswordHash;
    }

    public String getUserKey() {
        return userKey;
    }

    public void setUserKey(String userKey) {
        this.userKey = userKey;
    }

    public String getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(String userRoles) {
        this.userRoles = userRoles;
    }

    public String getUserLangs() {
        return userLangs;
    }

    public void setUserLangs(String userLangs) {
        this.userLangs = userLangs;
    }

    public boolean isUserDisabled() {
        return userDisabled;
    }

    public void setUserDisabled(boolean userDisabled) {
        this.userDisabled = userDisabled;
    }

    @Override
    public String getCommandName() {
        return "put-user";
    }
}
