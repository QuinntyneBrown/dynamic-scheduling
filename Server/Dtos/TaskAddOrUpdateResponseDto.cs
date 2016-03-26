using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TaskAddOrUpdateResponseDto: TaskDto
    {
        public TaskAddOrUpdateResponseDto(Task entity)
            :base(entity)
        {

        }
    }
}
