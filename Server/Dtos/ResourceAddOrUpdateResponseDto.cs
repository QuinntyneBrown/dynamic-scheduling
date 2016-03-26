using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ResourceAddOrUpdateResponseDto: ResourceDto
    {
        public ResourceAddOrUpdateResponseDto(Resource entity)
            :base(entity)
        {

        }
    }
}
