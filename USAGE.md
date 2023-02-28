<!-- Start SDK Example Usage -->
```typescript
import {
  GetWorkspaceKeysRequest,
  GetWorkspaceKeysResponse 
} from "/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Infisical } from "";

const sdk = new Infisical({
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
});
    
const req: GetWorkspaceKeysRequest = {
  pathParams: {
    workspaceId: "unde",
  },
};

sdk.key.getWorkspaceKeys(req).then((res: GetWorkspaceKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->