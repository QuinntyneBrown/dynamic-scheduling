using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/contact")]
    public class ContactController : ApiController
    {
        public ContactController(IContactService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(ContactAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(ContactAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult Get(ContactAddOrUpdateRequestDto dto) { return Ok(this.service.Get()); }

		[Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly IContactService service;

    }
}
