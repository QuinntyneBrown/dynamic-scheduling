using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VenueTypeDto
    {
        public VenueTypeDto(VenueType entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public VenueTypeDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
