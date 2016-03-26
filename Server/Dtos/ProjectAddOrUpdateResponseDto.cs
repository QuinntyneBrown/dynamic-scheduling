using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ProjectAddOrUpdateResponseDto: ProjectDto
    {
        public ProjectAddOrUpdateResponseDto(Project entity)
            :base(entity)
        {

        }
    }
}
