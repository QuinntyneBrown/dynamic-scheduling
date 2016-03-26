using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VenueTypeAddOrUpdateResponseDto: VenueTypeDto
    {
        public VenueTypeAddOrUpdateResponseDto(VenueType entity)
            :base(entity)
        {

        }
    }
}
