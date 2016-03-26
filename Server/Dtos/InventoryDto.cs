using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class InventoryDto
    {
        public InventoryDto(Inventory entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public InventoryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
