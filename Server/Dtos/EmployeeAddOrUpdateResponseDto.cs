using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class EmployeeAddOrUpdateResponseDto: EmployeeDto
    {
        public EmployeeAddOrUpdateResponseDto(Employee entity)
            :base(entity)
        {

        }
    }
}
