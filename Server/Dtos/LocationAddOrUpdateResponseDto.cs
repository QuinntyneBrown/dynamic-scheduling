using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class LocationAddOrUpdateResponseDto: LocationDto
    {
        public LocationAddOrUpdateResponseDto(Location entity)
            :base(entity)
        {

        }
    }
}
