using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class SkillDto
    {
        public SkillDto(Skill entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public SkillDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
