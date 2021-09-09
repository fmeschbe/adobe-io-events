(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4827],{74665:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return s}});var o=a(22122),t=a(19756),r=(a(15007),a(64983)),i=a(99536),d=["components"],l={},m={_frontmatter:l},p=i.Z;function s(e){var n=e.components,a=(0,t.Z)(e,d);return(0,r.mdx)(p,(0,o.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adobe-io-events-provider-api"},"Adobe I/O Events Provider API"),(0,r.mdx)("p",null,"Our Adobe I/O Events Management API contains endpoints allowing you to manage your ",(0,r.mdx)("inlineCode",{parentName:"p"},"Events Providers")," and their associated ",(0,r.mdx)("inlineCode",{parentName:"p"},"Event Metadata"),": "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"GET")," the list of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Events Providers")," you are entitled to,"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"POST"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"PUT"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"PATCH"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"DELETE")," your ",(0,r.mdx)("a",{parentName:"li",href:"../using/custom_events.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"Custom Events Providers")))),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Create a project in the ",(0,r.mdx)("a",{parentName:"li",href:"/adobe-io-events/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/projects-empty.md"},"Adobe Developer Console")),(0,r.mdx)("li",{parentName:"ul"},"Add the ",(0,r.mdx)("inlineCode",{parentName:"li"},"I/O Management API")," in your Adobe Developer Console project ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Click on ",(0,r.mdx)("inlineCode",{parentName:"li"},"Add to Project")," > ",(0,r.mdx)("inlineCode",{parentName:"li"},"API")),(0,r.mdx)("li",{parentName:"ul"},"Select ",(0,r.mdx)("inlineCode",{parentName:"li"},"I/O Management API")),(0,r.mdx)("li",{parentName:"ul"},"Create a new service account (JWT) credential screen, "),(0,r.mdx)("li",{parentName:"ul"},"Save"),(0,r.mdx)("li",{parentName:"ul"},"Bookmark your workspace, as you might need to come back to it more than once, to fine tune or troubleshoot your configurations."),(0,r.mdx)("li",{parentName:"ul"},"Once done, note you have a JWT credentials defined"))),(0,r.mdx)("li",{parentName:"ul"},"Note all your project Ids",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Browse to your Adobe Developer Console > ",(0,r.mdx)("inlineCode",{parentName:"li"},"Project overview")),(0,r.mdx)("li",{parentName:"ul"},"Find your ",(0,r.mdx)("inlineCode",{parentName:"li"},"IMS Org Id"),", and ",(0,r.mdx)("inlineCode",{parentName:"li"},"api-key")," "),(0,r.mdx)("li",{parentName:"ul"},"Click on ",(0,r.mdx)("inlineCode",{parentName:"li"},"Download"),", open the downloaded ",(0,r.mdx)("inlineCode",{parentName:"li"},"json")," file with your favorite editor, in there you'll find :",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"your project Id (at ",(0,r.mdx)("inlineCode",{parentName:"li"},"project.id"),") "),(0,r.mdx)("li",{parentName:"ul"},"your consumer Org Id (also called ",(0,r.mdx)("inlineCode",{parentName:"li"},"consumer id"),") (at ",(0,r.mdx)("inlineCode",{parentName:"li"},"project.org.id"),")"),(0,r.mdx)("li",{parentName:"ul"},"your workspace Id (at ",(0,r.mdx)("inlineCode",{parentName:"li"},"project.workspace.id"),")           "))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/adobe-io-events/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/credentials.md"},"Generate a JWT token"))),(0,r.mdx)("h2",{id:"test-drive"},"Test Drive"),(0,r.mdx)("p",null,"Once the above are defined (and stuffed as environment variables),\nyou are ready to use the API, refer to its ",(0,r.mdx)("a",{parentName:"p",href:"/adobe-io-events/apis/experienceplatform/events/ioeventsapi.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"swagger"),"/",(0,r.mdx)("inlineCode",{parentName:"a"},"OpenApi")," documentation"),"."),(0,r.mdx)("p",null,"To help you further, here are a few sample ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," commands."),(0,r.mdx)("p",null,"The one below will ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET")," the list of all the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Events Providers")," you are entitled to use."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'   curl -i -v --request GET \\\n    --url https://api.adobe.io/events/${consumerId}/providers \\\n    --header "x-api-key: $api_key" \\\n    --header "Authorization: Bearer $jwt_token" \\\n    --header "Accept: application/hal+json"\n    \n')),(0,r.mdx)("p",null,"Now you have the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Events Providers")," IDs, you can list their ",(0,r.mdx)("inlineCode",{parentName:"p"},"Event Metadata"),": "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'  curl -i -v --request GET \\\n    --url https://api.adobe.io/events/providers/${providerId}?eventmetadata=true \\\n    --header "x-api-key: $api_key" \\\n    --header "Authorization: Bearer $jwt_token" \\\n    --header "Accept: application/hal+json" \n    \n')),(0,r.mdx)("p",null,"To create your own ",(0,r.mdx)("a",{parentName:"p",href:"../using/custom_events.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"Custom Events Provider"))," :"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -i -v --request POST \\\n  --url https://api.adobe.io/events/${consumerId}/${projectId}/${workspaceId}/providers \\\n  --header "x-api-key: $api_key" \\\n  --header "Authorization: Bearer $jwt_token" \\\n  --header \'content-type: application/json\' \\\n  --header \'Accept: application/hal+json\' \\\n  --data \'{\n      "label": "a label of your choice for you Custom Events Provider",\n      "description": "a description of your Custom Events Provider",\n      "docs_url": "https://yourdocumentation.url.if.any"\n    }\'\n    \n')),(0,r.mdx)("p",null,"To associate ",(0,r.mdx)("inlineCode",{parentName:"p"},"Event Metadata")," with the above:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -i -v --request POST \\\n  --url  https://api.adobe.io/events/${consumerId}/${projectId}/${workspaceId}/providers/${providerId}/eventmetadata \\\n  --header "x-api-key: $api_key" \\\n  --header "Authorization: Bearer $jwt_token" \\\n  --header \'content-type: application/json\' \\\n  --header \'Accept: application/hal+json\' \\\n   --data \'{\n  "event_code": "your.reverse.dns.event_code",\n  "label": "a label for your event type",\n  "description": "a description for your event type"\n   }\'\n')),(0,r.mdx)("p",null,"With the 2 commands above, your ",(0,r.mdx)("inlineCode",{parentName:"p"},"Custom Events Provider")," is ready to be used,\nyou can register ",(0,r.mdx)("a",{parentName:"p",href:"../intro/webhooks_intro.md"},"webhooks")," against it;\nto start emitting events on its behalf use our ",(0,r.mdx)("a",{parentName:"p",href:"eventsingress_api.md"},"Events Publishing API"),"."),(0,r.mdx)("p",null,"To delete your ",(0,r.mdx)("inlineCode",{parentName:"p"},"Custom Events Provider"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -i -v --request DELETE \\\n --url https://api.adobe.io/events/${consumerId}/${projectId}/${workspaceId}/providers/${providerId} \\\n --header "x-api-key: $api_key" \\\n --header "Authorization: Bearer $jwt_token" \\\n --header "Accept: application/hal+json" \n')),(0,r.mdx)("p",null,"The environment variables used in this ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," commands are computed from the prerequisites documented above:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"api_key")," is the api-key associated with your workspace in theAdobe Developer Console"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"jwt_token")," is a jwt token generated using the set up from the same workspace"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"projectId")," is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"project.id")," found the ",(0,r.mdx)("inlineCode",{parentName:"li"},"json")," model of your Adobe Developer Console project (see above) "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"consumerId")," is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"project.org.id")," found the ",(0,r.mdx)("inlineCode",{parentName:"li"},"json")," model of your Adobe Developer Console project (see above) "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"workspaceId")," is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"project.workspace.id")," found the ",(0,r.mdx)("inlineCode",{parentName:"li"},"json")," model of your Adobe Developer Console project (see above)          ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-api-provider-api-md-f49efb914a49edd7671c.js.map