using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace sas.api
{
	public static class Roles
	{
		[FunctionName("RolesGET")]
		public static async Task<IActionResult> RunAsync([HttpTrigger(AuthorizationLevel.Function, "GET", Route = "Roles")]
			HttpRequest req, ILogger log)
		{
			// Request body is supposed to contain the user's access token
			string Body = await new StreamReader(req.Body).ReadToEndAsync();

			log.LogInformation($"Looking for custom roles to assign to '{Body}'.");

			return new OkObjectResult(new List<string>());
		}
	}
}