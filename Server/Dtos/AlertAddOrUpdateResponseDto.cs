using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AlertAddOrUpdateResponseDto: AlertDto
    {
        public AlertAddOrUpdateResponseDto(Alert entity)
            :base(entity)
        {

        }
    }
}
