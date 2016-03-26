using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class OrganizationAddOrUpdateResponseDto: OrganizationDto
    {
        public OrganizationAddOrUpdateResponseDto(Organization entity)
            :base(entity)
        {

        }
    }
}
