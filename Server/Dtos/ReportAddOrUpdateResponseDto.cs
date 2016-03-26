using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ReportAddOrUpdateResponseDto: ReportDto
    {
        public ReportAddOrUpdateResponseDto(Report entity)
            :base(entity)
        {

        }
    }
}
