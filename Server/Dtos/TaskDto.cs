using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TaskDto
    {
        public TaskDto(Task entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public TaskDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
