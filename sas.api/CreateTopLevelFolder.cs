using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

using Azure.Storage.Files.DataLake;
using Azure.Storage.Files.DataLake.Models;
using sas.api;

namespace sas.api
{
    public static class CreateTopLevelFolder
    {
        [FunctionName("CreateTopLevelFolder")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req, 
            ILogger log)
        {
            // GET - Send Instructions back to calling client
            if (req.Method == HttpMethods.Get) {
                log.LogInformation("CreateTopLevelFolder GET method called.");
                var tlfp = JsonConvert.SerializeObject(new TopLevelFolderParameters());
                var help = $"Use a POST method with the body containing the properties of {nameof(TopLevelFolderParameters)}\n{tlfp}";
                return new OkObjectResult(help);
            }

            // POST - Method
            if (req.Method == HttpMethods.Post)
            {
                log.LogInformation("CreateTopLevelFolder POST method called.");
                // Validate Parameters
                //if (tlfp is null) {
                //    return new BadRequestObjectResult($"{nameof(TopLevelFolderParameters)} is missing or badly formatted. ");
                //}

                // Do Work Here
                /*
                    [] Add Folder Owner to Container ACL as Execute
                    [] Create Folder
                    [] Assign RWX for Folder to Folder Owner
                    [] Add Fund Code to metadata
                */
                return new OkResult();
            }

            // Error
            return new BadRequestResult();
        }

        public static async Task ManageDirectoryACLs(DataLakeFileSystemClient fileSystemClient)
        {
            var directoryClient = fileSystemClient.GetDirectoryClient("");
            var directoryAccessControl = await directoryClient.GetAccessControlAsync();
            foreach (var item in directoryAccessControl.Value.AccessControlList)
            {
                Console.WriteLine(item.ToString());
            }

            var accessControlList = PathAccessControlExtensions.ParseAccessControlList("user::rwx,group::r-x,other::rw-");

            directoryClient.SetAccessControlList(accessControlList);

        }
    }


}
