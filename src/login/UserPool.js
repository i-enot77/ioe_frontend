import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-central-1_m2zyTtvkx",
    ClientId: "7ad84n266qe9euvhpdjqf1ji02"
}
export default new CognitoUserPool(poolData);