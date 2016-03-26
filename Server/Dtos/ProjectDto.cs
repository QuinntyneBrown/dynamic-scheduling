using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ProjectDto
    {
        public ProjectDto(Project entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ProjectDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
