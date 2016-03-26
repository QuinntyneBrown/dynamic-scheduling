using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ContactAddOrUpdateResponseDto: ContactDto
    {
        public ContactAddOrUpdateResponseDto(Contact entity)
            :base(entity)
        {

        }
    }
}
