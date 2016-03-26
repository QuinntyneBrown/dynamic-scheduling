using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EquipmentTypeAddOrUpdateResponseDto: EquipmentTypeDto
    {
        public EquipmentTypeAddOrUpdateResponseDto(EquipmentType entity)
            :base(entity)
        {

        }
    }
}
