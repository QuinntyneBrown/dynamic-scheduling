using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EquipmentDto
    {
        public EquipmentDto(Equipment entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public EquipmentDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
