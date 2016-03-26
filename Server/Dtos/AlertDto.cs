using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AlertDto
    {
        public AlertDto(Alert entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public AlertDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
