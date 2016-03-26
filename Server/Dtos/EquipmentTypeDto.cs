using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EquipmentTypeDto
    {
        public EquipmentTypeDto(EquipmentType entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public EquipmentTypeDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
