using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IEmployeeService
    {
        EmployeeAddOrUpdateResponseDto AddOrUpdate(EmployeeAddOrUpdateRequestDto request);
        ICollection<EmployeeDto> Get();
        EmployeeDto GetById(int id);
        dynamic Remove(int id);
    }
}
