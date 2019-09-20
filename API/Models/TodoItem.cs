
namespace SPA.Models
{
    public class TodoItem
    {
        public enum TodoStatus { Pending, Completed }

        public string todoId { get; set; }
        public string description { get; set; }
        public TodoStatus status { get; set; }
        
    }
}
