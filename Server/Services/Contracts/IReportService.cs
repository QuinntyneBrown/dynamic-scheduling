using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IReportService
    {
        ReportAddOrUpdateResponseDto AddOrUpdate(ReportAddOrUpdateRequestDto request);
        ICollection<ReportDto> Get();
        ReportDto GetById(int id);
        dynamic Remove(int id);
    }
}
