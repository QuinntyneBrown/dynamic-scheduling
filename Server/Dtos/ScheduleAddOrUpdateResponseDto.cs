using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ScheduleAddOrUpdateResponseDto: ScheduleDto
    {
        public ScheduleAddOrUpdateResponseDto(Schedule entity)
            :base(entity)
        {

        }
    }
}
