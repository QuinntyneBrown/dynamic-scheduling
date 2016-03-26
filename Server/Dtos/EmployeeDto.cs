using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EmployeeDto
    {
        public EmployeeDto(Employee entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public EmployeeDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
