using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EventDto
    {
        public EventDto(Event entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public EventDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
