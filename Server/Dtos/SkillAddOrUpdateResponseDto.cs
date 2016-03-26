using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class SkillAddOrUpdateResponseDto: SkillDto
    {
        public SkillAddOrUpdateResponseDto(Skill entity)
            :base(entity)
        {

        }
    }
}
