using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VenueDto
    {
        public VenueDto(Venue entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public VenueDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
