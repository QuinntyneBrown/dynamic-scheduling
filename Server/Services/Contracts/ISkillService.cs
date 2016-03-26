using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ISkillService
    {
        SkillAddOrUpdateResponseDto AddOrUpdate(SkillAddOrUpdateRequestDto request);
        ICollection<SkillDto> Get();
        SkillDto GetById(int id);
        dynamic Remove(int id);
    }
}
