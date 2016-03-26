using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EquipmentAddOrUpdateResponseDto: EquipmentDto
    {
        public EquipmentAddOrUpdateResponseDto(Equipment entity)
            :base(entity)
        {

        }
    }
}
