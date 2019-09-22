define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/activitylog",
    "title": "Get account activity history",
    "version": "1.0.0",
    "name": "get_api_v1_activitylog",
    "group": "ActivityLog",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get latest 15 activities related to your account.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/activitylog/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  }\n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "homes",
            "description": "<p>List of homes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "  HTTPS 200 OK\n{ \n  \"success\":true,\n  \"activitylogs\":[ \n     { \n        \"ipAddress\":\"184.22.232.44\",\n        \"clientId\":\"sinricpro-web\",\n        \"message\":\"Device [test2] created\",\n        \"device\":\"5d874bff2d9b0d47ef36be49\",\n        \"expireAt\":\"2019-09-25T10:25:03.169Z\",\n        \"createdAt\":\"2019-09-22T10:25:03.171Z\",\n        \"updatedAt\":\"2019-09-22T10:25:03.171Z\",\n        \"id\":\"5d874bff2d9b0d47ef36be4a\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/activity_log.js",
    "groupTitle": "ActivityLog",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/activitylogs/device/:id",
    "title": "Get a specific device logs",
    "version": "1.0.0",
    "name": "get_api_v1_activitylogs__id",
    "group": "ActivityLog",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get a specific device logs using  device <code>id</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Home object's id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/activitylogs/device/5c5e726095bd1817e07ab3ac',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  }\n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "home",
            "description": "<p>The requested home.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"activitylogs\": {\n      \"ipAddress\":\"184.22.232.44\",\n      \"clientId\":\"sinricpro-web\",\n      \"message\":\"Device [test2] created\",\n      \"device\":\"5d874bff2d9b0d47ef36be49\",\n      \"expireAt\":\"2019-09-25T10:25:03.169Z\",\n      \"createdAt\":\"2019-09-22T10:25:03.171Z\",\n      \"updatedAt\":\"2019-09-22T10:25:03.171Z\",\n      \"id\":\"5d874bff2d9b0d47ef36be4a\"\n     }      \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/activity_log.js",
    "groupTitle": "ActivityLog",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/logout",
    "title": "Logout",
    "version": "1.0.0",
    "name": "get_api_v1_logout",
    "group": "Authentication",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Logout from the current session. This will clear the issued token for this session as well.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/logout',\n  headers: \n  {   \n      'Content-Type': 'application/x-www-form-urlencoded' \n  }\n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Login result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth.js",
    "groupTitle": "Authentication",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/refresh_token",
    "title": "Refresh token",
    "version": "1.0.0",
    "name": "get_api_v1_refresh_token",
    "group": "Authentication",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get a new <code>accessToken</code> using refresh_token.</p> <p>If you login from multiple apps or devices (app, web) using the same account you will see multiple tokens in the output json.</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh token you received in /auth</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "accountId",
            "description": "<p>User account id. (_id from account in /auth)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/auth/refresh_token',\n  headers: \n  {   \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   refreshToken: 'c3pie156k86e...',\n      accountId: '5c51ccbd5c6a793124498436',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Login result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Your new access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Your new refresh token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"accessToken\": \"eyJhbGciOiJIUz..\",\n    \"refreshToken\": \"qcYHEIkQh981y..\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth.js",
    "groupTitle": "Authentication",
    "error": {
      "examples": [
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/reject_token",
    "title": "Reject a token",
    "version": "1.0.0",
    "name": "get_api_v1_reject_token",
    "group": "Authentication",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Blacklist <code>refreshToken</code> from active use.</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>token to be rejected</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "accountId",
            "description": "<p>Issued user account id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/auth/reject_token',\n  headers: \n  {   \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   refreshToken: 'c3pie156k86e...',\n      accountId: '5c51ccbd5c6a793124498436',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Login result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Your new access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Your new refresh token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"accessToken\": \"eyJhbGciOiJIUz..\",\n    \"refreshToken\": \"qcYHEIkQh981y..\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth.js",
    "groupTitle": "Authentication",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/auth",
    "title": "Login with credentials",
    "version": "1.0.0",
    "name": "post_api_v1_auth",
    "group": "Authentication",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Creates an access token that gives you access to the subsequent calls to the API.</p> <p>This resource uses Basic Authorization. Follow these steps to create an access token:</p> <ol> <li>Concatenate your email, a colon character “:”, and your password into a single string</li> <li>Base64 encode the string from Step 1</li> <li>Include the resulting encoded string from Step 2 in an Authorization header as follows</li> </ol>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization:",
            "description": "<p>Basic [encoded string]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The public identifier of the application that the developer obtained during registration.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "const request = require(\"request\");\nconst username = \"john\";\nconst password = \"1234\";\nconst url = \"https://api.sinric.pro/api/v1/auth\";\nconst auth = \"Basic \" + new Buffer.from(username + \":\" + password).toString(\"base64\");\n\nconst options = { \n  method: 'POST',\n  url: url,\n  headers: \n  {   'Authorization' : auth,\n      'Content-Type'  : 'application/x-www-form-urlencoded' \n  },\n  form: \n  {\n      client_id: \"android-app\"\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Login result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Your access token to the subsequent calls. (for <TOKEN HERE> in this guide)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Your refresh token. Use this to obtain a new <code>accessToken</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expiresIn",
            "description": "<p>When this token will expire (in seconds)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "subscriptionExpired",
            "description": "<p>Whether account subcription has expired?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "account",
            "description": "<p>User account details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response for user login",
          "content": "HTTPS 200 OK\n    {\n    \"success\": true,\n    \"message\": \"OK.\",\n    \"accessToken\": \"eyJhbGciOiJIUzI1Ni..\",\n    \"refreshToken\": \"tg0AiCgEbQe..\",\n    \"expiresIn\": 604800,\n    \"subscriptionExpired\": false,\n    \"account\": {\n           \"name\": \"Aruna Tennakoon\",\n            ......\n        }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth.js",
    "groupTitle": "Authentication",
    "error": {
      "examples": [
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/auth",
    "title": "Login with API Key",
    "version": "1.0.0",
    "name": "post_api_v1_auth_with_apikey",
    "group": "Authentication",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Login with an API Key to get access to the subsequent calls to the API.</p> <p>Set the x-sinric-api-key http header with your API Key.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-sinric-api-key:",
            "description": "<p>Your API Key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The public identifier of the application that the developer obtained during registration.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "const request = require(\"request\");\nconst username = \"john\";\nconst password = \"1234\";\nconst url = \"https://api.sinric.pro/api/v1/auth\";\n\nconst options = { \n  method: 'POST',\n  url: url,\n  headers: \n  {   'x-sinric-api-key' : 'xxxxxxxxxxxxxx',\n      'Content-Type'  : 'application/x-www-form-urlencoded' \n  },\n  form: \n  {\n      client_id: \"android-app\"\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Login result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Your access token to the subsequent calls. (for <TOKEN HERE> in this guide)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Your refresh token. Use this to obtain a new <code>accessToken</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expiresIn",
            "description": "<p>When this token will expire (in seconds)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "subscriptionExpired",
            "description": "<p>Whether account subcription has expired?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "account",
            "description": "<p>User account details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response for user login",
          "content": "HTTPS 200 OK\n    {\n    \"success\": true,\n    \"message\": \"OK.\",\n    \"accessToken\": \"eyJhbGciOiJIUzI1Ni..\",\n    \"refreshToken\": \"tg0AiCgEbQe..\",\n    \"expiresIn\": 604800,\n    \"subscriptionExpired\": false,\n    \"account\": {\n           \"name\": \"Aruna Tennakoon\",\n            ......\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth.js",
    "groupTitle": "Authentication",
    "error": {
      "examples": [
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/credentials/appkeyandsecret/:id",
    "title": "Delete a app key and secret credentials",
    "version": "1.0.0",
    "name": "delete_api_v1_appkeyandsecret__id",
    "group": "Credentials",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Delete a app key and secret credential using <code>id</code>.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'DELETE',\n  url: 'https://api.sinric.pro/api/v1/credentials/appkeyandsecret/5c5e4578beafb23e08e15b8d',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Device object's _id</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/credential.js",
    "groupTitle": "Credentials",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/credentials/api/:id",
    "title": "Delete a credential",
    "version": "1.0.0",
    "name": "delete_api_v1_credentials__id",
    "group": "Credentials",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Delete a specific credential using <code>id</code>.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'DELETE',\n  url: 'https://api.sinric.pro/api/v1/credentials/api/5c5e4578beafb23e08e15b8d',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  }\n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Device object's _id</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/credential.js",
    "groupTitle": "Credentials",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/credentials/api",
    "title": "Get all API key credentials",
    "version": "1.0.0",
    "name": "get_api_v1_credentials_api",
    "group": "Credentials",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get all credentials</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/credentials/api',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  }\n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "devices",
            "description": "<p>List of devices</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "  HTTPS 200 OK\n  {\n      \"success\": true,\n      \"credentials\": [\n      {\n          \"name\": \"Door ESP8266 Access Key\",\n          \"apiKey\": \"5c5f796c40a15340803141c9\",\n          \"createdAt\": \"2019-02-10T01:07:56.845Z\",\n          \"updatedAt\": \"2019-02-10T01:07:56.845Z\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/credential.js",
    "groupTitle": "Credentials",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/credentials/appkeyandsecret",
    "title": "Get all app key and secret credentials",
    "version": "1.0.0",
    "name": "get_api_v1_credentials_appkeyandsecret",
    "group": "Credentials",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get all app key and secret credentials</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/credentials/appkeyandsecret',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  }\n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "devices",
            "description": "<p>List of devices</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "  HTTPS 200 OK\n  {\n      \"success\": true,\n      \"credentials\": [\n      {\n          \"name\": \"Esp8266\",\n          \"appkey\": \"5c5f796c40a15340803141c9\",\n          \"appsecert\": \"5c5f796c40a15340803141c9\",\n          \"createdAt\": \"2019-02-10T01:07:56.845Z\",\n          \"updatedAt\": \"2019-02-10T01:07:56.845Z\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/credential.js",
    "groupTitle": "Credentials",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/credentials/api",
    "title": "Create an API credential",
    "version": "1.0.0",
    "name": "post_api_v1_credentials_apicredential",
    "group": "Credentials",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Create a new API credential</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Access key name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'POST',\n  url: 'https://api.sinric.pro/api/v1/credentials/api',\n  headers: \n  {   \n      'Authorization': 'Bearer <TOKEN HERE>',       \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n    name: 'Door API KEY',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "credential",
            "description": "<p>Credential details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"credential\": {\n        \"name\": \"Door API KEY\",\n        \"apiKey\": \"5c5f796c40a15340803141c9\",\n        \"createdAt\": \"2019-02-10T01:07:56.845Z\",\n        \"updatedAt\": \"2019-02-10T01:07:56.845Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/credential.js",
    "groupTitle": "Credentials",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/credentials/appkeyandsecret",
    "title": "Create a new app key and a secret credential",
    "version": "1.0.0",
    "name": "post_api_v1_credentials_appkeyandsecret",
    "group": "Credentials",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Create a new app key and a secret credential</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Appropriate credential name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'POST',\n  url: 'https://api.sinric.pro/api/v1/credentials/appkeyandsecret',\n  headers: \n  {   \n      'Authorization': 'Bearer <TOKEN HERE>',       \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n    name: 'tv device',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "credential",
            "description": "<p>Credential details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"credential\": {\"success\":true,\"credential\":{\"appname\":\"tv device\",\"appkey\":\"a628a2dc-fdd7-48f5-a6a4-33b2b6d7ce5f\",\"appsecert\":\"0379e0a8-a44e-4e76-99f7-8d6843b8358d\",\"user\":\"5c67c51b268198273c8551d1\",\"createdAt\":\"2019-09-04T16:26:40.982Z\",\"updatedAt\":\"2019-09-04T16:26:40.982Z\",\"id\":\"5d6fe5c032c5c74a14cd47dc\"}}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/credential.js",
    "groupTitle": "Credentials",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/dashboard",
    "title": "Get user's dashboard",
    "version": "1.0.0",
    "name": "get_api_v1_dashboard",
    "group": "Dashboard",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get user dashboard details</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/dashboard/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "dashboard",
            "description": "<p>dashboard items</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"dashboard\": {\n        \"homes\": [\n            {\n                \"name\": \"My Home\",\n                \"description\": \"\",\n                \"createdAt\": \"2019-02-16T08:08:59.575Z\",\n                \"updatedAt\": \"2019-02-16T08:08:59.575Z\",\n                \"id\": \"5c67c51b268198273c8551d2\",\n                \"rooms\": [\n                    {\n                        \"name\": \"Room 1\",\n                        \"home\": \"5c67c51b268198273c8551d2\",\n                        \"createdAt\": \"2019-02-16T08:12:52.433Z\",\n                        \"updatedAt\": \"2019-02-16T08:12:52.433Z\",\n                        \"id\": \"5c67c6044fe3d545342d469e\",\n                        \"devices\": [\n                            {\n                                \"alias\": [],\n                                \"isOnline\": false,\n                                \"attributes\": [\n                                    \"your_custom_attribute=1\",\n                                    \"your_custom_attribute=2\"\n                                ],\n                                \"powerState\": \"OFF\",\n                                \"name\": \"SWITCH\",\n                                \"description\": \"IRDEVKIT SWITCH module in the living room\",\n                                \"macAddress\": \"xx:xx:xx:xx\",\n                                \"product\": {\n                                    \"active\": \"true\",\n                                    \"attributes\": [\n                                        \"someflag=1\"\n                                    ],\n                                    \"deviceManualSetupInstructions\": [\n                                        \"Step1\",\n                                        \"Step2\"\n                                    ],\n                                    \"name\": \"Smart Socket\",\n                                    \"manufacturer\": \"5c67c495268198273c8551cd\",\n                                    \"model\": \"SR2\",\n                                    \"shortDescription\": \"IRDEVKIT's smart socket that can be turned on and off using Alexa\",\n                                    \"description\": \"long description here\",\n                                    \"productImageUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n                                    \"productArtWorkUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n                                    \"hwVersion\": \"1.0.0\",\n                                    \"swVersion\": \"1.0.0\",\n                                    \"customData\": \"your custom data goes here\",\n                                    \"createdAt\": \"2019-02-16T08:07:48.786Z\",\n                                    \"updatedAt\": \"2019-02-16T08:07:48.786Z\",\n                                    \"id\": \"5c67c4d4268198273c8551d0\"\n                                },\n                                \"room\": \"5c67c6044fe3d545342d469e\",\n                                \"hwVersion\": \"1.0.0\",\n                                \"swVersion\": \"1.0.0\",\n                                \"serialNumber\": \"xxxxxxxx-xxx-xxx-xx\",\n                                \"lastIpAddress\": \"192.168.1.1\",\n                                \"createdAt\": \"2019-02-16T08:13:14.960Z\",\n                                \"updatedAt\": \"2019-02-16T08:13:14.960Z\",\n                                \"id\": \"5c67c61a4fe3d545342d469f\"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/dashboard.js",
    "groupTitle": "Dashboard",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/devices/:id",
    "title": "Delete a device",
    "version": "1.0.0",
    "name": "delete_api_v1_devices__id",
    "group": "Device",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Delete a specific device using <code>id</code>.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'DELETE',\n  url: 'https://api.sinric.pro/api/v1/devices/5c5e4578beafb23e08e15b8d',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Device object's _id</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/device.js",
    "groupTitle": "Device",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/devices",
    "title": "Get all devices",
    "version": "1.0.0",
    "name": "get_api_v1_devices",
    "group": "Device",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get all devices</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/devices/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  }\n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "devices",
            "description": "<p>List of devices</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"devices\": [\n        {\n         \"name\": \"IRDEVKIT PRO3\",\n         \"description\": \"IRDEVKIT PRO module in the living room\",\n         ......,\n        }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/device.js",
    "groupTitle": "Device",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/devices/:deviceId/action",
    "title": "Send an action to the device",
    "version": "1.0.0",
    "name": "get_api_v1_devices__deviceId_action",
    "group": "Device",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Send an action to the device. Eg: <code>setOn</code> <code>setOff</code></p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>Client identifier. Use something meaningfull (eg: android-app)</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Actions to be performed. Eg: <code>setPowerState</code></p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Json value. Check examples here (https://github.com/sinricpro/sample_messages)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "const query = 'clientId=android-app&type=request&createdAt=1550493108338&action=setPowerState&value={\"state\": \"On\"}';\nvar request = require(\"request\");\n \nvar options = { method: 'GET',\n   url: 'https://api.sinric.pro/api/v1/devices/<deviceid>/action?' + query,\n   headers: \n    { Authorization: 'Bearer <TOKEN HERE>',\n     'Content-Type': 'application/x-www-form-urlencoded' \n    }\n   };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Action(s) has been accepted and passed to the device or an error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    {\n     \"success\":true,\n     \"message\":\"OK. Your message has been queued for processing.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/device.js",
    "groupTitle": "Device",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/devices/:id",
    "title": "Get a specific device",
    "version": "1.0.0",
    "name": "get_api_v1_devices__id",
    "group": "Device",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get a specific device using <code>id</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Device object's id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/devices/5c5f50b31c28610d24156e2f',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "device",
            "description": "<p>Requested device details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"devices\": \n        {\n         \"id\": \"5c5f796c40a15340803141c9\",\n         \"name\": \"IRDEVKIT PRO3\",\n         \"description\": \"IRDEVKIT PRO module in the living room\",\n        } \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/device.js",
    "groupTitle": "Device",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/devices",
    "title": "Create a device",
    "version": "1.0.0",
    "name": "post_api_v1_devices",
    "group": "Device",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Create a new device</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Device name.</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "productId",
            "description": "<p>Product id. See /products.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>Associated room id. See /rooms</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Other device names for this device.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Device description.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "macAddress",
            "description": "<p>Network MAC address.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "lastConnectedSSID",
            "description": "<p>Connected WiFi Name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "hwVersion",
            "description": "<p>Hardware version</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "swVersion",
            "description": "<p>Software version</p>"
          },
          {
            "group": "Request body",
            "type": "[String]",
            "optional": true,
            "field": "attributes",
            "description": "<p>Any custom attributes you want to include</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "serialNumber",
            "description": "<p>Hardware serial number</p>"
          },
          {
            "group": "Request body",
            "type": "[String]",
            "optional": true,
            "field": "lastIpAddress",
            "description": "<p>Device's IP address.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "customData",
            "description": "<p>Any custom data you want to include.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "accessKeyId",
            "description": "<p>Access Key Id for this device. Check the /api/v1/credentials/appkeyandsecret to get the id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'POST',\n  url: 'https://api.sinric.pro/api/v1/devices',\n  headers: \n  {   \n      'Authorization': 'Bearer <TOKEN HERE>',       \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n    name: 'IRDEVKIT PRO3',\n    description: 'IRDEVKIT PRO module in the living room',\n    macAddress: 'xx:xx:xx:xx',\n    productId: '5c5f72915ef9c024b423a046',\n    roomId: '5c5f796140a15340803141c8',\n    hwVersion: '1.0.0',\n    swVersion: '1.0.0',\n    'attributes[0]': '{ \"name\" : \"gpio_pin\", \"values\" :  4  }',\n    serialNumber: 'xxxxxxxx-xxx-xxx-xx',\n    lastIpAddress: '192.168.1.1',\n    customData: 'text',\n    accessKeyId: '5c5f796140a15340803141c8'\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "device",
            "description": "<p>Device details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"device\": {\n        \"name\": \"IRDEVKIT PRO3\",\n        \"description\": \"IRDEVKIT PRO module in the living room\",\n        ......\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/device.js",
    "groupTitle": "Device",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/find",
    "title": "Find a device",
    "version": "1.0.0",
    "name": "post_api_v1_find",
    "group": "Device",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Find a device</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Device name.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "macAddress",
            "description": "<p>Network MAC address.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "serialNumber",
            "description": "<p>Hardware serial number</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'POST',\n  url: 'https://api.sinric.pro/api/v1/devices/find',\n  headers: \n  {   \n      'Authorization': 'Bearer <TOKEN HERE>',       \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n    macAddress: 'xx:xx:xx:xx',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "device",
            "description": "<p>Device details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"devices\": [{\n        \"id\": \"5c5f796c40a15340803141c9\",\n        \"name\": \"IRDEVKIT PRO3\",\n        \"description\": \"IRDEVKIT PRO module in the living room\",\n        ....\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/device.js",
    "groupTitle": "Device",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/devices",
    "title": "Update an existing device",
    "version": "1.0.0",
    "name": "put_api_v1_devices",
    "group": "Device",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Update an existing device</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Device object's id.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Device name.</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "productId",
            "description": "<p>Product id. See /products.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Other device names for this device.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Device description.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "macAddress",
            "description": "<p>Network MAC address.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "lastConnectedSSID",
            "description": "<p>Connected WiFi Name.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "roomId",
            "description": "<p>Associated room id. See /rooms.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "hwVersion",
            "description": "<p>Hardware version.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "swVersion",
            "description": "<p>Software version.</p>"
          },
          {
            "group": "Request body",
            "type": "[String]",
            "optional": true,
            "field": "attributes",
            "description": "<p>Any custom attributes you want to include</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "serialNumber",
            "description": "<p>Hardware serial number.</p>"
          },
          {
            "group": "Request body",
            "type": "[String]",
            "optional": true,
            "field": "lastIpAddress",
            "description": "<p>Device's IP address.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "customData",
            "description": "<p>Any custom data you want to include. eg: reference to your iot system product id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'PUT',\n  url: 'https://api.sinric.pro/api/v1/devices',\n  headers: \n  {   \n      'Authorization': 'Bearer <TOKEN HERE>',       \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n    id: \"5c5f796c40a15340803141c9\",    \n    name: 'IRDEVKIT PRO3',\n    description: 'IRDEVKIT PRO module in the living room',\n    macAddress: 'xx:xx:xx:xx',\n    productId: '5c5f72915ef9c024b423a046',\n    roomId: '5c5f796140a15340803141c8',\n    hwVersion: '1.0.0',\n    swVersion: '1.0.0',\n    'attributes[0]': '{ \"name\" : \"gpio_pin\", \"values\" :  4  }',\n    serialNumber: 'xxxxxxxx-xxx-xxx-xx',\n    lastIpAddress: '192.168.1.1',\n    customData: 'text'\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/device.js",
    "groupTitle": "Device",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/homes",
    "title": "Create a new home",
    "version": "1.0.0",
    "name": "GetHome",
    "group": "Home",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Creates a user residence. The user can have multiple residences</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The home name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>home image. Check the /upload documentation to see how to upload an image.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'POST',\n  url: 'https://api.sinric.pro/api/v1/homes/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   name: 'Home',\n      imageUrl: 'http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "home",
            "description": "<p>Home details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n\"success\": true,\n\"home\": {\n    \"id\": \"5c5e726095bd1817e07ab3ac\",\n    \"name\": \"Home\",\n    \"imageUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n    \"createdAt\": \"2019-02-09T06:25:36.458Z\",\n    \"updatedAt\": \"2019-02-09T06:25:36.458Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/home.js",
    "groupTitle": "Home",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/homes",
    "title": "Delete a home",
    "version": "1.0.0",
    "name": "delete_api_v1_homes",
    "group": "Home",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Delete a specific home using <code>id</code>.</p> <p>WARNING:</p> <ol> <li>All the rooms created for this home will be removed.</li> <li>All the devices assigned to above rooms will be unassociated.</li> </ol>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'DELETE',\n  url: 'https://api.sinric.pro/api/v1/homes',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {\n      id: \"5c5e726095bd1817e07ab3ac\"\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Home object's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/home.js",
    "groupTitle": "Home",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/homes",
    "title": "Get all homes",
    "version": "1.0.0",
    "name": "get_api_v1_homes",
    "group": "Home",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get all homes this user has created.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/homes/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "homes",
            "description": "<p>List of homes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"homes\": [\n    {\n        \"id\": \"5c5e726095bd1817e07ab3ac\",\n        \"name\": \"Home\",\n        \"imageUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n        \"createdAt\": \"2019-02-09T06:25:36.458Z\",\n        \"updatedAt\": \"2019-02-09T06:25:36.458Z\"\n    }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/home.js",
    "groupTitle": "Home",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/homes/:id",
    "title": "Get a specific home",
    "version": "1.0.0",
    "name": "get_api_v1_homes__id",
    "group": "Home",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get a specific home using <code>id</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Home object's id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/homes/5c5e726095bd1817e07ab3ac',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "home",
            "description": "<p>The requested home.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"home\": {\n        \"id\": \"5c5e726095bd1817e07ab3ac\",\n        \"name\": \"Home\",\n        \"imageUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n        \"createdAt\": \"2019-02-09T06:25:36.458Z\",\n        \"updatedAt\": \"2019-02-09T06:25:36.458Z\"\n     }      \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/home.js",
    "groupTitle": "Home",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/homes",
    "title": "Update an existing home",
    "version": "1.0.0",
    "name": "put_api_v1_homes__id",
    "group": "Home",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Updates a home</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Home object's id</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The home name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>home image. Check the /upload documentation to see how to upload an image.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'PUT',\n  url: 'https://api.sinric.pro/api/v1/homes/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n      id: \"5c5e726095bd1817e07ab3ac\",    \n      name: \"Home\",\n      imageUrl: 'http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/home.js",
    "groupTitle": "Home",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v1/rooms/:id",
    "title": "Delete a room",
    "version": "1.0.0",
    "name": "delete_api_v1_rooms",
    "group": "Room",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Delete a specific room using <code>id</code>.</p> <p>WARNING: When you delete a room any associated device will be unassinged.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'DELETE',\n  url: 'https://api.sinric.pro/api/v1/rooms/5c5e4578beafb23e08e15b8d',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Room object's _id</p>"
          }
        ]
      }
    },
    "filename": "routes/api/v1/rooms.js",
    "groupTitle": "Room",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/defaultlist",
    "title": "Get default list of room names",
    "version": "1.0.0",
    "name": "get_api_v1_defaultlist",
    "group": "Room",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List of common room names</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'POST',\n  url: 'https://api.sinric.pro/api/v1/rooms/defaultlist',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "rooms",
            "description": "<p>List of room names</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n\"success\": true,\n\"rooms\": [\n     \"Back garden\",\n     \"Bathroom\",\n     \"Bedroom\",\n     .....\n ]  \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/rooms.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/api/v1/rooms",
    "title": "Get all rooms",
    "version": "1.0.0",
    "name": "get_api_v1_rooms",
    "group": "Room",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get all rooms this user has created.</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/rooms/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "rooms",
            "description": "<p>List of rooms</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"rooms\": [\n    {\n        \"id\": \"5c5e4578beafb23e08e15b8d\",\n        \"name\": \"My room\",\n        \"imageUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n        \"createdAt\": \"2019-02-09T06:25:36.458Z\",\n        \"updatedAt\": \"2019-02-09T06:25:36.458Z\"\n    }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/rooms.js",
    "groupTitle": "Room",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/rooms/:id",
    "title": "Get a specific room",
    "version": "1.0.0",
    "name": "get_api_v1_rooms",
    "group": "Room",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get a specific room using <code>id</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Room object's id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/rooms/5c5e4578beafb23e08e15b8d',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "room",
            "description": "<p>The requested room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n    \"room\": {\n        \"id\": \"5c5e4578beafb23e08e15b8d\",\n        \"name\": \"My room\",\n        \"imageUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n        \"createdAt\": \"2019-02-09T06:25:36.458Z\",\n        \"updatedAt\": \"2019-02-09T06:25:36.458Z\"\n     }      \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/rooms.js",
    "groupTitle": "Room",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/rooms",
    "title": "Create a new room",
    "version": "1.0.0",
    "name": "post_api_v1_rooms",
    "group": "Room",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Creates a room inside home</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "homeId",
            "description": "<p>The home id that this room belongs to</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Room name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Room description</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>room image. Check the /upload documentation to see how to upload an image.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'POST',\n  url: 'https://api.sinric.pro/api/v1/rooms/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   name: 'My bedroom',\n      homeId: '5c5e4578beafb23e08e15b8d'\n      description: 'test'\n      imageUrl: 'http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "room",
            "description": "<p>Room details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n\"success\": true,\n\"room\": {\n    \"id\": \"5c5e726095bd1817e07ab3ac\",\n    \"name\": \"My bedroom\",\n    \"imageUrl\": \"http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png\",\n    \"createdAt\": \"2019-02-09T06:25:36.458Z\",\n    \"updatedAt\": \"2019-02-09T06:25:36.458Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/rooms.js",
    "groupTitle": "Room",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/rooms",
    "title": "Update an existing room",
    "version": "1.0.0",
    "name": "put_api_v1_rooms__id",
    "group": "Room",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Updates a room</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Room object's id</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The room name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "homeId",
            "description": "<p>The home id that this room belongs to</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>room image. Check the /upload documentation to see how to upload an image.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'PUT',\n  url: 'https://api.sinric.pro/api/v1/rooms/',\n  headers: \n  {   'Authorization': 'Bearer <TOKEN HERE>',\n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n      id: \"5c5e726095bd1817e07ab3ac\",    \n      name: 'My room',\n      homeId: '5c5e4578beafb23e08e15b8d'\n      imageUrl: 'http://192.168.1.100:3003/images/320x320/2019-02-09-512-1549677267718.png',\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/rooms.js",
    "groupTitle": "Room",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/images/:key/:name",
    "title": "Get an uploaded image",
    "version": "1.0.0",
    "name": "get_images__key__name",
    "group": "Upload",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get an uploaded image from server</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "key",
            "description": "<p>Output image size. eg: 320x320</p>"
          },
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>Image name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\n\nvar options = { method: 'GET',\n  url: 'http://192.168.1.100:3003/api/v1/images/320x320/2019-02-15-512-1550266151540.png',\n  headers: \n   { } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Image",
            "optional": false,
            "field": "Image",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/api/v1/images.js",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "/api/v1/users/myself",
    "title": "Get your account details",
    "version": "1.0.0",
    "name": "get_api_v1_users_myself",
    "group": "Users",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get your account details</p>",
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'GET',\n  url: 'https://api.sinric.pro/api/v1/users/myself',\n  headers: \n  {   \n      'Authorization': 'Bearer <TOKEN HERE>',       \n      'Content-Type': 'application/x-www-form-urlencoded' \n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/users.js",
    "groupTitle": "Users",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1/myself",
    "title": "Update your account details",
    "version": "1.0.0",
    "name": "patch_api_v1_users",
    "group": "Users",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Update your user account details</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>user name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "NodeJS:",
        "content": "var request = require(\"request\");\nvar options = { \n  method: 'PATCH',\n  url: 'https://api.sinric.pro/api/v1/users/myself',\n  headers: \n  {   \n      'Authorization': 'Bearer <TOKEN HERE>',       \n      'Content-Type': 'application/x-www-form-urlencoded' \n  },\n  form: \n  {   \n    name: 'Aruna Tennakoon'\n  } \n};\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n  console.log(body);\n});",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The request has succeeded or failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/users.js",
    "groupTitle": "Users",
    "error": {
      "examples": [
        {
          "title": "Error (401)",
          "content": "HTTPS 401 Unauthorized\n{\n  \"success\": false, \n  \"message\" : \"Access token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error (500)",
          "content": "HTTPS 500 Internal Server Error\n{\n  \"success\": false, \n  \"message\" : \"Internal server error.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (422)",
          "content": "HTTPS 422 Unprocessable Entity\n{\n  \"success\": false, \n  \"message\" : \"xxx is required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error (403)",
          "content": "HTTPS 403 Forbidden\n{\n  \"success\": false, \n  \"message\" : \"Account is locked.\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
