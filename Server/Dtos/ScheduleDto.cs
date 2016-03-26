using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ScheduleDto
    {
        public ScheduleDto(Schedule entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ScheduleDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
