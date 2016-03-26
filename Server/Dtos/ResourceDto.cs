using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ResourceDto
    {
        public ResourceDto(Resource entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ResourceDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
