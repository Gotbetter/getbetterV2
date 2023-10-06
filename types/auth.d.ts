type GoogleUserType = {
  id: string;
  email: string;
  name: string;
  picture: string;
};

type UserToken = {
  access_token: string;
  refresh_token: string;
};

export { GoogleUserType, UserToken };
