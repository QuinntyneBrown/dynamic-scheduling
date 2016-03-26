using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VendorAddOrUpdateResponseDto: VendorDto
    {
        public VendorAddOrUpdateResponseDto(Vendor entity)
            :base(entity)
        {

        }
    }
}
