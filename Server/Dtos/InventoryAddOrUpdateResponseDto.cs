using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class InventoryAddOrUpdateResponseDto: InventoryDto
    {
        public InventoryAddOrUpdateResponseDto(Inventory entity)
            :base(entity)
        {

        }
    }
}
