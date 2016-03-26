using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class LocationDto
    {
        public LocationDto(Location entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public LocationDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
