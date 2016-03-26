using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class OrganizationDto
    {
        public OrganizationDto(Organization entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public OrganizationDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
