using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VenueAddOrUpdateResponseDto: VenueDto
    {
        public VenueAddOrUpdateResponseDto(Venue entity)
            :base(entity)
        {

        }
    }
}
