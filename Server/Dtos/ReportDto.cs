using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ReportDto
    {
        public ReportDto(Report entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ReportDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
