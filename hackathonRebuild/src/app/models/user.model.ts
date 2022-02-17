export class User {
    id?: String;
    email?: String;
    password?: String;
    passwordResetToken?: String;
    passwordResetExpires?: Date;
    emailVerificationToken?: String;
    emailVerified?: Boolean;
    
    snapchat?: String;
    facebook?: String;
    twitter?: String;
    google?: String;
    github?: String;
    instagram?: String;
    linkedin?: String;
    steam?: String;
    twitch?: String;
    quickbooks?: String;
    //tokens?: Array<string>;
    
    profile?: {
        name: String,
        gender: String,
        location: String,
        website: String,
        picture: String 
    }
}
