using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class VendorDto
    {
        public VendorDto(Vendor entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public VendorDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
