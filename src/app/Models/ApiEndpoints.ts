import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiEndpoints {
  // Authentication Endpoints
  authentication = {
    validateJwtAuth: "api/Auth/ValidateJwtToken",
    loginUser: "api/Auth/LoginUser",
    logoutUser: "api/Auth/LogoutUser",
    registerNewUser: "api/Auth/RegisterNewUser"
  };

  // Other Endpoints
  prompts = {
    getPrompt: "Prompt"
  };

  constructor() {}
}
