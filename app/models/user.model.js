module.exports = mongoose => {
        var schema = mongoose.Schema(
        {
            id: String,
            email: String,
            password: String,
            passwordResetToken: String,
            passwordResetExpires: Date,
            emailVerificationToken: String,
            emailVerified: Boolean,
          
            snapchat: String,
            facebook: String,
            twitter: String,
            google: String,
            github: String,
            instagram: String,
            linkedin: String,
            steam: String,
            twitch: String,
            quickbooks: String,
            //tokens: Array,
          
            profile: {
              name: String,
              gender: String,
              location: String,
              website: String,
              picture: String 
            }
        },
        { timestamps: true }
      );
    
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const User = mongoose.model("user", schema);
      return User;
  };