using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EventAddOrUpdateResponseDto: EventDto
    {
        public EventAddOrUpdateResponseDto(Event entity)
            :base(entity)
        {

        }
    }
}
