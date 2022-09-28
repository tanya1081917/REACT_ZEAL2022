export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "userdetail": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "regitrationProcess": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "Registration": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}